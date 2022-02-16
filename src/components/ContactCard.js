import React from "react";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className="item">
                <img className="ui avatar image" src="https://media.istockphoto.com/photos/blue-male-avatar-blank-shape-in-white-hole-3d-illustration-picture-id1283675387?b=1&k=20&m=1283675387&s=170667a&w=0&h=k-LHpDan16ZZZMjhKDRYJX9oKPSfTLoptB25Ebi_9EA=" alt="user"></img>
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px",marginLeft:"7px", position:"relative",left:"700px"}}></i>
            </div>
    );
};

export default ContactCard;

