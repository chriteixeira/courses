import React, {
    Component
} from 'react';

import styles from '../styles/Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.button}>
                Button name
            </div>
        );
    }
}

export default Button;