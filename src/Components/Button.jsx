

function Button ({color}) {
    // console.log({color});
    const changeBackgroundColor = () => {
        // console.log(color);
        document.body.style.backgroundColor = color;
    }

    return (
    <button 
    className="p-100 rounded-full px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" 
    style={{backgroundColor: color}}
    onClick={changeBackgroundColor}>
        {color}
    </button>
  )
}

export default Button;