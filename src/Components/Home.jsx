import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="">
        <img
          className="w-full h-[100vh] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
        />
      </div>
      <div className="absolute top-0 w-full h-full text-center bg-black/70 ">
        <h1 className="pt-[200px] text-white text-5xl font-bold p-4">
          Unlimited movies, TV shows <br />
          and more
        </h1>
        <p className="text-white text-xl font-bold p-4">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="text-white text-xl p-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center items-center ">
          <div className="h-13">
            <input
              className="w-[366px] bg-black/50 p-4 text-gray-200 border-1 border-white/50"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div>
            <button className=" bg-red-500 h-15 w-50 ml-3 text-3xl font-medium rounded-sm text-white cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black overflow-hidden">
        <div className="pl-40 pt-20 ">
          <h1 className="text-white text-4xl mb-5">Trending Now</h1>

          <div className="flex flex-row l w-[2000px]">
            <div className="w-[320px] m-5">
              <span className="">
                <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYUCgDPIk4LvnEw_j-dC5ca65oxm4yP2Z7RFKlRcN6WYzCwNA4MhTNqTRrSAK9zND3cSjrYEpbQculmTCXPD09ZbvdCosdbuOjc.webp?r=062&quot" />
              </span>
              <span className="text-white font-bold text-6xl">
                <h1>1</h1>
              </span>
            </div>

            <div className="w-[320px] m-5">
              <span>
                <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYGL4_ns5MGTE5-Yd3ZQVB5apyY9yxQ39lxjT_27ehdoGzrxRwNc4osgXEeifcv9yO_MgMySL-p6hMxtQZnIEkZmyglIJ7wm7ik.webp?r=c23&quot" />
              </span>
              <span className="text-white font-bold text-6xl">
                <h1>2</h1>
              </span>
            </div>

            <div className="w-[320px] m-5">
              <span>
                <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWbVt8SbLqwQtrRbCG9VpQXX_Z6c57wYpD_UHJSW-eTT-oVf11K79jU-gQjcRfKqQ4aqPgsRjrPNLPcxfS1P6INHzVIQqhI7huMP5no6v-7or-WycCWfHPXs4xQmfZx0CvOY.webp?r=b91&quot" />
              </span>

              <span className="text-white font-bold text-6xl">
                <h1>3</h1>
              </span>
            </div>

            <div className="w-[320px] m-5">
              <span>
                <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZ2Btia34ViHOdbGThR2xD0XYVD9vkdTkUULeET8PcHeq12ebMOJyLaTD1yS26NaRfUqDMknk2XnomOCg78WEKeN3VEDdOKzFRayBGveEZ-MeOaVD-v0z5P25idICKgt-nXX.webp?r=a1c&quot" />
              </span>

              <span className="text-white font-bold text-6xl">
                <h1>4</h1>
              </span>
            </div>

            <div className="w-[320px] m-5">
              <span>
                <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYVcRfFB91jy3f8-_Alb6H4RUzqXFRA7ejjOfCOXF20XLRVeCyT3ZFEimKbZAimt2ayVUWXSnp6ApNxpoK0mA3XzJD__irrDkdMD6lDrOFPSvQqP8s0xn2dNBaU9JxIu4lUd.webp?r=63b&quot" />
              </span>

              <span className="text-white font-bold text-6xl">
                <h1>5</h1>
              </span>
            </div>

            <div className="w-[320px] m-5">
              <span>
                <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWtQdcUd4n6VKz6HTm_IbI2cOq0VDU7fDQpomIXBLuCYqtJ4j8hj2pz7j6spnX2osjRgTMJQ9xkMieYZWqC6xC8G4tGlTLJBm3I.webp?r=cc2&quot" />
              </span>

              <span className="text-white font-bold text-6xl">
                <h1>6</h1>
              </span>
            </div>

            <div className="w-[320px] m-5">
              <span>
                <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQqOh2yhpKE8385dV9hjlxxXtG63RjSjrlNOkx2yLuGMYe8JFTnA9ScVsioAhTa9Ds34ERhB2R4aBFUng1j54IFwl5JvjgVmGEU.webp?r=d66&quot" />
              </span>

              <span className="text-white font-bold text-6xl">
                <h1>7</h1>
              </span>
            </div>

            <div className="w-[320px] m-5">
              <span>
                <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZFBdXweIqorvQIPkQbuKg9rFcZJJ8yCUzSX1ySYOsmrcMeUgLlY3YWvFcXee7lFjHwMT_Ofd03ttH-rTzAHPZskA6K-f4imBAY.webp?r=81d&quot" />
              </span>

              <span className="text-white font-bold text-6xl">
                <h1>8</h1>
              </span>
            </div>

            <div className="w-[320px] m-5">
              <span>
                <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUbEuw4gn448vhUbeTgwsmEsA4ZhBFHAbPyFyAk414jH72BDs0ALdA2TEDez1mRZHuyUjlpB_EL0LxkrymlRyHs2joUg2Izzl4Q.webp?r=ad2&quot" />
              </span>

              <span className="text-white font-bold text-6xl">
                <h1>9</h1>
              </span>
            </div>

            <div className="w-[320px] m-5">
              <span>
                <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcBQAzZgCcAJyLKGf0x3EjJHKr1h1oCRUQDfVspaHXampP-RjiOkIRlWBz7ViFOvUI1EdPSRcxoOPmB7paPLi52W4OmQZJ4NDMQ.webp?r=a92&quot" />
              </span>

              <span className="text-white font-bold text-6xl">
                <h1>10</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
