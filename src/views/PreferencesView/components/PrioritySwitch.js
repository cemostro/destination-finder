import React, { useMemo } from "react";
import "../../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp, faAngleUp, faAnglesDown } from '@fortawesome/free-solid-svg-icons'

const PrioritySwitch = ({ attrName, userData, setUserData }) => {
    const switchIcon = useMemo(() => {
        switch (userData.Attributes[attrName].weight) {
            case 0:
                return faAnglesDown;
            case 1:
                return faAngleUp;
            case 2:
                return faAnglesUp;
            default:
                return faAngleUp;
        }
    }, [userData, attrName]);

    const onClick = () => {
        setUserData({
            ...userData,
            Attributes: {
                ...userData.Attributes,
                [attrName]: {
                    ...userData.Attributes[attrName],
                    weight: (userData.Attributes[attrName].weight + 1) % 3
                },
            },
        });
    }

    return (
        <div
            className="prio-switch"
            data-tooltip-id="prio-switch-tooltip" data-tooltip-content="Click to change priority. 
        Higher priority means that this attribute has a higher impact on the score. 
        At the lowest setting, this attribute will not be considered in the score."
        >
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={switchIcon} onClick={onClick} />
        </div>

    );
};

export default PrioritySwitch;
