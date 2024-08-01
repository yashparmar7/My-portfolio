
const SkillSection = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        My Skills
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here are some of the technologies Im proficient in.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid mt-10 max-w-5xl items-start gap-8 sm:grid-cols-3 md:gap-12 lg:grid-cols-5 ">
                <img 
                src="https://www.svgrepo.com/show/303500/react-1-logo.svg"
                width="100px"
                height="100px"
                alt="React" 
                className="mx-auto rounded-full shadow-lg object-fill"
                />
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" 
                width="100px"
                height="100px"
                alt="PHP" 
                className="mx-auto rounded-full shadow-lg object-fill"
                />
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
                width="100px"
                height="100px"
                alt="JavaScript" 
                className="mx-auto rounded-full shadow-lg object-fill"
                />
                <img 
                src="https://e7.pngegg.com/pngimages/170/924/png-clipart-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-thumbnail.png" 
                width="100px"
                height="100px"
                alt="Sql" 
                className="mx-auto rounded-full shadow-lg object-fill"
                />
                <img 
                 src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
                width="100px"
                height="100px"
                alt="MongoDB" 
                className="mx-auto rounded-full shadow-lg object-fill"
                />
            </div>
        </div>

    </section>
  )
}

export default SkillSection
