import React from 'react';
import PropTypes from 'prop-types';

ControlPresupuesto.propTypes = {
    
};

function ControlPresupuesto({presupuesto, restante}) {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto:$ {presupuesto}
            </div>
            <div className="alert">
                Restante:$ {restante}
            </div>
        </>
    );
}

export default ControlPresupuesto;