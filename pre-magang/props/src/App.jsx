import Student from "./Student"

function App() {

  return (
    <>
      <Student name="Muhammad" age={20} isStudent={false}/>
      <Student name="Farhan" age={21} isStudent={true}/>
      <Student name="Maulana" age={22} isStudent={false}/>
      <Student/>

    </> 
  )
}


export default App
