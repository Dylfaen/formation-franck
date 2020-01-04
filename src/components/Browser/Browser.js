import React, { useState, useEffect } from 'react';


import axios from "axios"

const Browser = (props) => {

  let [url, setUrl] = useState("pokeapi.co/api/v2/")

  let [html, setHtml] = useState("")

  useEffect(() => {
    axios.get("http://" + url).then((webPage) => {
      console.log("webPage", webPage.data)
      setHtml(JSON.stringify(webPage.data))
    }).catch(err => {
      setHtml("Une erreur est survenue")
    })
  }, [url])

  return ( <div>
    <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="www.google.fr"/>
    <p>

      {html === "" ? "Aucun donnée" : html}
    </p>
  </div> );
}
 
export default Browser;