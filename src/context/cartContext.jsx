import React,{createContext, useState} from 'react';

const cartContext = createContext()

function CartContextProvider(props){
    
    const [cart, setCart] = useState([]);
    
    function addToCart(item, count){
        if(itemInCart(item.id)){
            let newCart = cart.map((itemMap) =>{
                if (itemMap.id === item.id){
                    itemMap.count += count;
                    return itemMap;
                }
                else return itemMap;
            });
            setCart(newCart);
        } else {
            let newCart = cart.map((item) => item);
            newCart.push({...item,count: count});
            setCart(newCart);
        }        
      }
function removeItem(idToRemove) {
        let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove);
        setCart(newCart);
      } 

    function getTotalItemCount(){
        let total = 0
        cart.forEach(itemInCart =>{
            total = total + itemInCart.count
        });
        return total
    }
    function getTotalPrice(){
        let total = 0;
        cart.forEach((itemInCart)=> {
            total = total + (itemInCart.count * itemInCart.price);
        });
        return total;
    }

    function itemInCart(id) {
        let found = cart.some((item) => item.id === id);
        return found;
      }
    
    return(
        <>
        <cartContext.Provider value={{ cart, removeItem,addToCart, getTotalItemCount, getTotalPrice }}>
            {props.children}  
        </cartContext.Provider>
        </>
    );
}

export { cartContext , CartContextProvider}