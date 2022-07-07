
export default async function  handler(req, res) {
    if (req.method === 'GET') {
      let data = await fetch("https://v2.jokeapi.dev/joke/Any");
      let allJoke = await data.json();
      res.status(200).json(allJoke)
    } else { 
      res.status(200).json("Error") 
    }
  }
