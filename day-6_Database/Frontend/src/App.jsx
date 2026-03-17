import { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  const [ notes, setNotes ] = useState([])
  const [Formvalue, setFormvalue] = useState({
    title:'',
    description:''
  })

 

  function fetchNotes() {
    axios.get("http://localhost:3000/notes")
      .then(res => {
        setNotes(res.data.notes)
      })
  }
  useEffect(()=>{
handleSubmit
  },[])
  

  useEffect(() => {
    fetchNotes()
    
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setFormvalue({
      title:'',
      description:''
    })
   
   


    const { title, description } = e.target.elements

    console.log(title.value, description.value)

    axios.post("http://localhost:3000/notes", {
      title: title.value,
      description: description.value
    })
      .then(res => {
        console.log(res.data)

        fetchNotes()
        
      })

  }

  function handleDeleteNote(noteId){
  axios.delete(`http://localhost:3000/notes/${noteId}`)
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    })
}

 
 


  return (
    <>

      <form className='create-form' onSubmit={handleSubmit}  >
        <input name='title'
         type="text"
          placeholder='Enter title'
          required
          value={Formvalue.title}
           onChange={(e)=>{
            setFormvalue({
              ...Formvalue,
              [e.target.name]:e.target.value
            })
           }}
         
          
      

           />
        <input name='description'
         type="text"
          placeholder='Enter description'
          required 
           value={Formvalue.description}

           onChange={(e)=>{
            setFormvalue({
              ...Formvalue,
              [e.target.name]:e.target.value

            })
           }}
           
          />
          

        <button>Create note</button>
      </form>

      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={()=>{handleDeleteNote(note._id)}} >delete</button>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App