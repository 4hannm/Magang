import PropTypes from 'prop-types'

function Student(props) {
    return(
        <div className="student">
            <p>
                MyNameIs: {props.name}
            </p>
            <p>
                Age: {props.age}
            </p>
            <p>
                isStudent: {props.isStudent ? "he is a student":"he is not a student"}
            </p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student;