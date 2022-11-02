import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs,doc,getDoc,query,where, addDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWjcZLJ4__NZj_Yd4ammZw4sVFRbL6SOI",
  authDomain: "briated-e-commerce.firebaseapp.com",
  projectId: "briated-e-commerce",
  storageBucket: "briated-e-commerce.appspot.com",
  messagingSenderId: "554330568599",
  appId: "1:554330568599:web:f761c251e430aeb3efb6d2"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getJuegos(){
    const collectionRef = collection(db, 'juegos');
    let results = await getDocs(collectionRef);
    
    let dataJuegos= results.docs.map(doc =>{
        return{
        id: doc.id, ...doc.data()
    };    
})
return dataJuegos
}

export async function getUnJuego(idParams){
    try{
    const docRef = doc(db,'juegos',idParams);
    const docResult = await getDoc(docRef);
        if (docResult.exists()) {
            return {id: docResult.id, ...docResult.data()}; }
        else{
            throw new Error('El Juego no se encontro en la base de Datos.')
            }
        }
    catch(errorMsj) {
    console.error(errorMsj)
}
}


export async function getJuegosByConsole(idConsoleParams){
    const collectionRef = collection(db,'juegos');
    const queryConst = query(collectionRef, where('console','==',idConsoleParams))

    let results = await getDocs(queryConst);
    let dataJuegos = results.docs.map((doc) =>{
        return{
            id: doc.id, ...doc.data(),
        }
    })
    return dataJuegos
}
export async function createPaymentOrder(orderData){
    const collectionRef = collection(db, 'orders');
    let respuesta = await addDoc(collectionRef, orderData)
    console.log(respuesta.id)
}

export async function dataToFirebase(){
    const data = [
        {
          id: 1,
          title: "God Of War Ragnarok",
          img: "https://www.cdmarket.com.ar/Image/0/600_750-ragnarok-ps5.jpg",
          price: 22000,
          detail: "Viaja a increíbles y peligrosos entornos y enfréntate a un montón de diferentes criaturas, monstruos y dioses nórdicos, mientras Kratos y Atreus buscan respuestas y aliados.",
          stock: 10,
          console: "PS5",
        },
        {
          id: 2,
          title: "Call of Duty Modern Warfare II",
          img: "https://i.imgur.com/hkRN0fP.jpg",
          price: 23000,
          detail: "Regresa Modern Warfare®, así que reúne a tu pelotón y lucha junto con los icónicos operadores de la fuerza operativa 141.",
          stock: 8,
          console: "FPS",
        },
        {
          id: 3,
          title: "Super Smash Bros. Ultimate",
          img: "https://www.cdmarket.com.ar/Image/0/600_750-D_NQ_NP_637719-MLA28992153664_122018-O.jpg",
          price: 16000,
          detail: "Eleva la experiencia Super Smash Bros. a nuevas alturas con combate más rápido, nuevos ataques, nuevos artículos y nuevas opciones defensivas",
          stock: 7,
          console: "Nintendo Switch",
        },
        {
          id: 4,
          title: "FIFA 22",
          img: "https://www.cdmarket.com.ar/Image/0/600_750-51GcKhM86nS.jpg",
          price: 9000,
          detail: "FIFA 22 ofrece a millones de fanáticos de todo el mundo la oportunidad de participar en el deporte que aman de una manera sin precedentes",
          stock: 10,
          console: "PS5",
        },
        {
          id: 5,
          title: "Minecraft",
          img: "https://i.imgur.com/Z7H1dPT.jpg",
          price: 10000,
          detail: "Minecraft es un juego de colocación de bloques y aventuras.",
          stock: 8,
          console: "Nintendo Switch",
        },
        {
          id: 6,
          title: "World of Warcraft: Dragonflight",
          img: "https://i.imgur.com/Rbi33jy.jpg",
          price: 12000,
          detail: "Los Vuelos de Azeroth han regresado, llamados a defender su ancestral hogar, las Islas Dragón.",
          stock: 7,
          console: "PC",
        },
        {
          id: 7,
          title: "Mario Kart 8 Deluxe",
          img: "https://www.cdmarket.com.ar/Image/0/600_750-mario-kart-8-deluxe.jpg",
          price: 18000,
          detail: "Disfruta de Mario Kart Deluxe donde quieras y cuando quieras, incluso en partidas multijugador local para hasta ocho pilotos.",
          stock: 7,
          console: "Nintendo Switch",
        },
        {
          id: 8,
          title: "Gran Turismo 7",
          img: "https://www.cdmarket.com.ar/Image/0/600_750-3bfa7c57-0b11-4b13-81df-8cb3be6a1629.jfif",
          price: 18000,
          detail: "Gran Turismo 7 cuenta con 22 años de experiencia para ofrecerte las mejores características de la historia de la franquicia.",
          stock: 9,
          console: "PS5",
        },
        {
          id: 9,
          title: "Horizon Forbidden West",
          img: "https://www.cdmarket.com.ar/Image/0/600_750-horizon-2-forbidden-west-20201124144437_1.jpg",
          price: 21000,
          detail: "Únete a Aloy mientras desafía el Oeste Prohibido, una frontera majestuosa, aunque peligrosa, en la que se ocultan nuevas y misteriosas amenazas.",
          stock: 12,
          console: "PS5",
        },
        {
          id: 10,
          title: "Elden Ring",
          img: "https://http2.mlstatic.com/D_NQ_NP_893497-MLA51673409395_092022-O.webp",
          price: 12000,
          detail: "La Orden Dorada se ha roto.",
          stock: 13,
          console: "PC",
        },
        {
          id: 11,
          title: "Cyberpunk 2077",
          img: "https://media.vandal.net/m/20029/cyberpunk-2077-201961217172698_1.jpg",
          price: 6000,
          detail: "Conviértete en un cyberpunk, un mercenario urbano equipado con mejoras cibernéticas y crea tu leyenda en las calles de Night City. ",
          stock: 12,
          console: "PC",
        },
        {
          id: 12,
          title: "Pokemon Legends: Arceus",
          img: "https://ps4digitalargentina.com/files/images/productos/1638901745-pokemon-legends-arceus-nintendo-switch-pre-orden.jpg",
          price: 18000,
          detail: "Visita el Sinnoh de hace muchos años para capturar e investigar sus Pokémon salvajes y crear la primera Pokédex de la región.",
          stock: 12,
          console: "Nintendo Switch",
        }
      ];
      let itemsJuegos = collection(db,'juegos')
      for(let juego of data){
        delete(juego.id);
        let newDoc = await addDoc(itemsJuegos, juego);
        console.log('doc creado', newDoc.id)
      }
}
export default FirebaseApp;