import { useParams } from "react-router";

function AnyElement() {
    const { id } = useParams();
    return (<>
      <div><em>{id}</em> -bu id'desen</div>
    </>)
  
  }

export default AnyElement