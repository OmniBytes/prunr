import React from "react";
import Link from "next/link";

import { interest } from "../utils/firebase";

class CallToActionSignup extends React.Component {
  state = {
    email: ""
  };

  onChangeEmail = ({ target: { value } }) => {
    this.setState({ email: value.toLowerCase() });
  };

  onSubmitEmail = async () => {
    const { email } = this.state;
    console.log("submit -", email);

    const emiailRegex = /\S+@\S+\.\S+/;

    if (!emiailRegex.test(email)) {
      return;
    }

    const check = await interest.where("email", "==", email).get();

    if (check.docs.length) {
      const user = check.docs[0];
      const { id } = user;

      const { meta } = await user.data();
      meta.count = ++meta.count;
      meta.latest = new Date();

      interest.doc(id).update({ meta });

      console.log("found entry -", meta);
    } else {
      interest.add({
        email,
        meta: {
          initial: new Date(),
          count: 1
        }
      });
    }

    this.setState({ email: "" });
  };

  render() {
    return (
      <div>
        <div className="cta cta--reverse">
          <div className="container">
            <div className="cta__inner">
              <h2 className="cta__title">Show Interest</h2>
              <p className="cta__sub cta__sub--center">Join our newsletter.</p>

              <div style={{ display: "inline-block" }}>
                <input
                  type="text"
                  placeholder="email"
                  onChange={this.onChangeEmail}
                  value={this.state.email}
                  style={{
                    width: "40vw",
                    minWidth: 300,
                    maxWidth: 800,
                    display: "inline",
                    paddingRight: 90
                  }}
                />

                <button
                  className="button button__accent"
                  onClick={this.onSubmitEmail}
                  style={{ display: "inline", marginLeft: -85 }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{``}</style>
      </div>
    );
  }
}

export default CallToActionSignup;
