import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 m-10 border-2 border-red-500 w-1/2 mx-auto">
      <h1>This is home Page</h1>
      <p className="bg-orange-400 p-5 m-5 text-purple-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa obcaecati
        voluptatum ipsum exercitationem est consequuntur earum quisquam et
        numquam aliquam laboriosam placeat voluptatibus repellat, aut pariatur
        fuga repellendus nihil nam!
      </p>
    </div>
  );
}
