import PropTypes from 'prop-types';


const Event = ({color, event,}) => {
  return (
    <td className={'Event ' + color}>
        <h5>{event}</h5>
        <h6>{location}</h6>
    </td>
  )
};
Event.propTypes = {
    color: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
  };

export default Event
