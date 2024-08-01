import { useState } from "react";
import { Button } from "../ui/button";

const ContactSection = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleChange= (e) =>{
        if(e.target.name === "username"){
            setUsername(e.target.value)
        }
        if(e.target.name === "email"){
            setEmail(e.target.value)
        }
        if(e.target.name === "message"){
            setMessage(e.target.value)
        }
    }
    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log(username, email, message)
        setUsername("")
        setEmail("")
        setMessage("")
        
    }
    
  return (
    <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Contact Me.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent web development projects.
            </p>

            <div className="mx-auto w-full max-w-sm space-y-2">
                <form action="" className="flex flex-col gap-4 border-md shadow-md bg-white px-4 py-2 m-4" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="username" value={username} onChange={handleChange} className="max-w-lg flex-1 px-2 py-2 rounded-md border" />
                    <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} className="max-w-lg flex-1 px-2 py-2 rounded-md border" />
                    <textarea name="message" placeholder="enter your message..." value={message} onChange={handleChange} className="max-w-lg flex-1 px-2 py-2 rounded-md border"  />
                    <Button>Submit</Button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;