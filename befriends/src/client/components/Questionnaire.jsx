import { useRef, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from 'prop-types';

export default function Questionnaire({ viewSwitcher }) {
  const { user } = useAuth0();
  const [hobbyTags, setHobbyTags] = useState([]);
  const [interestTags, setInterestTags] = useState([]);
  const birthdayInput = useRef();
  const cityInput = useRef();
  const stateInput = useRef();
  const hobbyInput = useRef();
  const interestInput = useRef();

  const addHobby = () => {
    const hobby = hobbyInput.current.value;
    if (hobby) {
      setHobbyTags((prevTags) => [...prevTags, hobby]);
      hobbyInput.current.value = "";
    }
  };

  const addInterest = () => {
    const interest = interestInput.current.value;
    if (interest) {
      setInterestTags((prevTags) => [...prevTags, interest]);
      interestInput.current.value = "";
    }
  };

  const removeHobbyTag = (index) => {
    setHobbyTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const removeInterestTag = (index) => {
    setInterestTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const submitUserInfo = (e) => {
    e.preventDefault();

    let body = {
      firstname: user.given_name,
      lastName: user.family_name,
      username: user.nickname,
      email: user.email,
      birthday: birthdayInput.current.value,
      location: `${cityInput.current.value}, ${stateInput.current.value}`,
      profile_pic: user.picture,
      banner_pic: "placeholder text",
      hobby: hobbyTags.concat(interestTags)
    }

    axios
      .post('/postUser', body)
      .then((response) => {
        console.log(response)
        viewSwitcher(1);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={submitUserInfo}>
      <div className="questionnaire-form-content bg-base-100">
        <div className="questionnaire-form-header">
          <h3 className="questionnaire-form-title">
            Let&apos;s get to know you...
          </h3>
        </div>

        <div className="questionnaire-form-body">
          <h5 className="questionnaire-form-subtitle">Personal Information</h5>

          <div className="questionnaire-form-input">
            <h6>Birthday:</h6>
            <label htmlFor="birthday-input"></label>
            <input
              id="birthday-input"
              maxLength="30"
              ref={birthdayInput}
              required
              type="date"
            />
          </div>

          <div className="questionnaire-form-input">
            <h6>Location:</h6>
            <label htmlFor="city-input"></label>
            <input
              id="city-input"
              maxLength="30"
              placeholder="City"
              ref={cityInput}
              required
              type="text"
            />

            <select className="address-input" defaultValue="" ref={stateInput}>
              <option value="">Select State</option>
              <option value="Alabama">AL</option>
              <option value="Alaska">AK</option>
              <option value="Arizona">AZ</option>
              <option value="Arkansas">AR</option>
              <option value="California">CA</option>
              <option value="Colorado">CO</option>
              <option value="Connecticut">CT</option>
              <option value="Delaware">DE</option>
              <option value="Florida">FL</option>
              <option value="Georgia">GA</option>
              <option value="Hawaii">HI</option>
              <option value="Idaho">ID</option>
              <option value="Illinois">IL</option>
              <option value="Indiana">IN</option>
              <option value="Iowa">IA</option>
              <option value="Kansas">KS</option>
              <option value="Kentucky">KY</option>
              <option value="Louisiana">LA</option>
              <option value="Maine">ME</option>
              <option value="Maryland">MD</option>
              <option value="Massachusetts">MA</option>
              <option value="Michigan">MI</option>
              <option value="Minnesota">MN</option>
              <option value="Mississippi">MS</option>
              <option value="Missouri">MO</option>
              <option value="Montana">MT</option>
              <option value="Nebraska">NE</option>
              <option value="Nevada">NV</option>
              <option value="New Hampshire">NH</option>
              <option value="New Jersey">NJ</option>
              <option value="New Mexico">NM</option>
              <option value="New York">NY</option>
              <option value="North Carolina">NC</option>
              <option value="North Dakota">ND</option>
              <option value="Ohio">OH</option>
              <option value="Oklahoma">OK</option>
              <option value="Oregon">OR</option>
              <option value="Pennsylvania">PA</option>
              <option value="Rhode Island">RI</option>
              <option value="South Carolina">SC</option>
              <option value="South Dakota">SD</option>
              <option value="Tennessee">TN</option>
              <option value="Texas">TX</option>
              <option value="Utah">UT</option>
              <option value="Vermont">VT</option>
              <option value="Virginia">VA</option>
              <option value="Washington">WA</option>
              <option value="West Virginia">WV</option>
              <option value="Wisconsin">WI</option>
              <option value="Wyoming">WY</option>
            </select>
          </div>

          <h5 className="questionnaire-form-subtitle">Hobbies & Interests</h5>

          <div className="questionnaire-form-input">
            <h6>Hobbies:</h6>
            <label htmlFor="hobbies-input"></label>
            <input
              id="hobbies-input"
              maxLength="30"
              placeholder=""
              ref={hobbyInput}
              type="text"
            />
            <button type="button" onClick={addHobby}>
              Add
            </button>
          </div>

          <div className="questionnaire-form-hobby">
            {hobbyTags.map((tag, index) => (
              <span
                className="tag"
                key={index}
                onClick={() => removeHobbyTag(index)}
              >
                &times;&nbsp;&nbsp;{tag}
              </span>
            ))}
          </div>

          <div className="questionnaire-form-input">
            <h6>Interests:</h6>
            <label htmlFor="interests-input"></label>
            <input
              id="interests-input"
              maxLength="30"
              placeholder=""
              ref={interestInput}
              type="text"
            />
            <button type="button" onClick={addInterest}>
              Add
            </button>
          </div>
        </div>

        <div className="questionnaire-form-interest">
          {interestTags.map((tag, index) => (
            <span
              className="tag"
              key={index}
              onClick={() => removeInterestTag(index)}
            >
              &times;&nbsp;&nbsp;{tag}
            </span>
          ))}
        </div>

        <div className="questionnaire-form-footer">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

Questionnaire.propTypes = {
  viewSwitcher: PropTypes.any.isRequired,
};