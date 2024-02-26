function Restart({status,dispatch}) {
    if (status === "finished")
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    );
}


export default Restart
