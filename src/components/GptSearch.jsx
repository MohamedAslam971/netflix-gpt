import { BG_URL } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>
        <div className="absolute w-full -z-10">
        <img
          className="w-full h-full"
          src={BG_URL}
          alt="bg_img"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />

    </div>
  )
}

export default GptSearch