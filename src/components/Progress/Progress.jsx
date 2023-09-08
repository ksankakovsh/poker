const Progress = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 4,
      width: '96%',
      backgroundColor: "#373352",
      borderRadius: 4,
      margin: '2px auto'
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      transition: 'width 1s ease-in-out',
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
    const load = {
        color: "#FFF",
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontWeight: 400,
        textAlign: 'left',
        margin: '5px 0 9px 7px'
    }
  
    return (
    <>
    <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
      <p style={load}>Loadind {`${completed}%`}</p>
    </>
    
    );
  };
  
  export default Progress;