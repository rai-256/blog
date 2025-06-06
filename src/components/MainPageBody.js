
import { SiteHeader } from "./SiteHeader";
import { ContentCard } from "./ContentCard";
import {useState, useEffect} from "react";


export function MainPageBody({ title, content_type }) {
    const [contents,setContents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/getContentsList", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              type:content_type
            })
          })
            .then(response => {
              return response.json();
            })
            .then(data => {setContents(data.data)
                console.log(data.data[0].title);
            })
            .catch(error => {
              console.error("Error:", error);
            });
    }, []);
    console.log(contents);
  return (
    <>
    <SiteHeader />
    <div className="grid grid-cols-3 gap-4 h-screen">
    <aside className="grid-item col-span-1"></aside>
    <main className="grid-item col-span-1 border-l border-r">
        {/* <div>{contents[0]}</div> */}
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        {contents.map((content) => (
            <ContentCard
                key={content.id}
                title={content.title}
                explanation={content.explanation}
                img_link={content.img_link}
                link={content.link}
            />
        ))}
        {/* <ContentCard title="test" explanation="test" img_link="test" link="test"></ContentCard> */}
        {/* <ContentCard title={contents[0].title} explanation={contents[0].explanation} img_link={contents[0].img_link} link={contents[0].link}></ContentCard>  */}
    </main>
    <aside className="grid-item col-span-1"></aside>
    </div>
    </>
  );
}
