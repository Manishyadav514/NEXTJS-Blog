export default async function handler(req, res) {
  let url = "https://v2.jokeapi.dev/joke/Any" + req.headers["query"];
  // console.log(req.headers['query']);
  // console.log(url)
  if (req.method === "GET") {
    let data = await fetch(url);
    let allJoke = await data.json();
    res.status(200).json(allJoke);
  } else {
    res.status(200).json("Error");
  }
}
