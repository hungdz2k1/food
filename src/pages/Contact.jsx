import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const messageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Liên hệ" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6" sm="12" className="m-auto text-center">
            <h2>Liên hệ với chúng tôi</h2>
              <p>
                Điền thông tin liên hệ vào biểu mẫu bên dưới.
              </p>
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Tên của bạn"
                    required
                    ref={nameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    required
                    ref={emailRef}
                  />
                </div>
                <div className="form__group">
                    <input
                      type="text"
                      placeholder="Nhập địa chỉ"
                      required
                      ref={addressRef}
                    />
                  </div>
                  <div className="form__group">
                    <textarea
                      rows="7"
                      placeholder="Nhập lời nhắn"
                      required
                      ref={messageRef}
                    ></textarea>
                  </div>
                <button type="submit" className="addTOCart__btn">
                  Gửi
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;

