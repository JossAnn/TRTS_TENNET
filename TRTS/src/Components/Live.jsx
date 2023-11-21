import ReactHlsPlayer from 'react-hls-player';

function Live() {
  const streamUrl = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

  return (
    <div className="w-full h-full bg-[#A49C9F] custom-shadow rounded-2xl col-span-10 flex justify-center items-center overflow-hidden">
      <ReactHlsPlayer
        src={streamUrl}
        autoPlay={true}
        controls={true}
        className='custom-settings'
      />
    </div>
  );
}

export default Live;



