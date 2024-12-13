export default function Model1({ isVisible,errormas=null }) { // ✅ استخدم destructuring
    console.log("isVisible:", isVisible);
    
    if (!isVisible) return null; // ✅ استخدم null بدلًا من div فارغ
  
    return (
      <div style={{ backgroundColor: "#f4f4f9", height: "100px", width: "100%", position: "absolute" }}>
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <h1 style={{ margin: "10px",color:errormas ? "red": "green"}}>{errormas != null ? errormas :"success"}</h1>
        </div>
      </div>
    );
  }
  