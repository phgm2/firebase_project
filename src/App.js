import { useState } from 'react';
import { db } from './firebaseConnection';
import { addDoc, collection, doc, setDoc, getDoc, getDocs } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  const [titulo, setTitulo] = useState();
  const [autor, setAutor] = useState();
  const [search, setSearch] = useState();

  const [list, setList] = useState([]);


  //Especifica o id
  // async function handleAdd(){
  //   await setDoc(doc(db, "posts", "12345678"), {
  //     titulo: titulo,
  //     autor: autor
  //   })
  //   .then(()=>{
  //     setTitulo('');
  //     setAutor('');
  //     toast.success("Post salvo com sucesso");
  //   })
  //   .catch(()=>{

  //   })
  // }
  //O Adddoc adiciona o id aleatorio
  async function handleAdd(){
    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor
    })
    .then(()=>{
      setTitulo('');
      setAutor('');
      toast.success("Post salvo com sucesso");
    })
    .catch((e)=>{
      console.log(e);
    })
  }


  async function buscarPost(){
    // const postRef = doc(db, "posts", search)

    // await getDoc(postRef)
    // .then((snapshot)=>{
    //   setAutor(snapshot.data().autor);
    //   setTitulo(snapshot.data().titulo);
    // })
    // .catch(()=>{

    // })

    const postRef = collection(db, "posts");

    await getDocs(postRef)
    .then((snapshot)=>{
      let lista = [];

      snapshot.forEach((doc)=>{
        lista.push({
            id:doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
      })

      setList(lista);
    })
    .catch(()=>{

    })


  }


  return (
    <div className="App">
      <ToastContainer />
      <div className='container'>
      <h1>ReactJs + Firebase :)</h1>
        <label>Titulo</label>
        <textarea placeholder='Digite o titulo' value={titulo} onChange={(e) => setTitulo(e.target.value) } ></textarea>
        <label>Autor:</label>
        <input type="text" placeholder="Autor do post" value={autor} onChange={(e)=> setAutor(e.target.value) }/>
        <input type="text" placeholder="Busca" value={search} onChange={(e)=> setSearch(e.target.value) }/>
        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar</button>
      </div>
      <div className='container'>
        {list.map((listItem)=>{
          return(
            <div key={listItem.id}>
              <h3>{listItem.titulo}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
