import React from "react";

function Header() {
  return (
    <>
      <div className="info text-center p-5">
        <h3 className="mb-4 fw-bold " style={{ color: "salmon" }}>
          This is Header Component Used In Master Layout Component
        </h3>
        <p
          style={{
            textWrap: "pretty",
            width: "100%",
            paddingLeft: "200px",
            paddingRight: "200px",
            gap: "20px",
            lineHeight: "3",
            fontStyle: "italic",
            fontWeight: "500",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta
          doloremque, tempora ipsa incidunt quos vitae repudiandae nihil quaerat
          aliquid suscipit harum, sapiente in aut aliquam qui quisquam numquam
          quasi perspiciatis dolores. Veniam quasi ipsum dolores ex non
          veritatis. Repellendus?
        </p>
      </div>
    </>
  );
}

export default Header;
