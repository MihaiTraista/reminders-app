import { useState, useEffect } from "react";

interface MessageType { data: string; };

function superLong (): Promise<MessageType> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data: "all right"});
    }, 1000);
  })
}


export default function SuspenseComp({  }){
  const [lateMessage, setLateMessage] = useState<MessageType | null>(null);

  useEffect(() => {

    console.log("lateMessage", lateMessage);

    const runAsync = async (): Promise<void> => {
      const msg = await superLong();
      console.log(msg);
      setLateMessage(msg);
    }

    runAsync();
  }, []);

  return <div>
    <h1>Suspense Comp</h1>
    {/* {lateMessage ? lateMessage.data : "waiting"} */}
    {/* <p>{lateMessage}</p> */}
  </div>
}