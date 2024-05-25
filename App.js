import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-screen h-screen bg-stone-700 overflow-x-hidden flex flex-col items-center">
        <h1 className="bg-stone-400 text-center w-[80%] mx-auto my-4 rounded-lg font-bold text-2xl p-2 text-stone-800">Random GIFs</h1>
        <div className="flex flex-col items-center w-full gap-8 mb-14">
          <Random/>
          <Tag/>
        </div>
        
    </div>
  );
}
