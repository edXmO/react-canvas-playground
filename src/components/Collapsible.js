import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CollapsibleHeader = styled.button`
    width: 150px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background: "violet";
`

const CollapsibleItems = styled.ul`
    display: flex;
    height: auto;
    flex-direction: row;
`

const Collapsible = ({ label, children }) => {

    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
    <>
    <CollapsibleHeader onClick={() => setIsCollapsed(!isCollapsed)}>
        {label}
    </CollapsibleHeader>
    {!isCollapsed ? <CollapsibleItems>{children}</CollapsibleItems> : null}
    </>
    ) 
}


export default Collapsible;

Collapsible.propTypes = {
    label: PropTypes.string
}