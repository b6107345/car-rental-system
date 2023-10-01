import React from "react";
import { Card, Col, Form, Input, Row, Button } from "antd";
import axios from "axios";
import Swal from "sweetalert2";
const Register = () => {
  const [form] = Form.useForm();

  const onSave = async (value) => {
    await axios
      .post("http://localhost:3001/api/user", {
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        password: value.password,
        phoneNumber: value.phoneNumber,
        roleId: 2,
      })
      .then(function (response) {
        if (response.status === 201) {
          Swal.fire(
            "สมัครสมาชิกสำเร็จ!",
            "You clicked the button!",
            "success"
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="px-[310px] py-20">
      <Form layout="vertical" onFinish={onSave} form={form}>
        <Card className="w-full">
          <p className="font-bold text-lg">สมัครสมาชิก</p>
          <div className="filter-tap mt-6">
            <Row justify="space-between" gutter={24}>
              <Col
                style={{ fontSize: 20, fontWeight: "bold", color: "#053938" }}
                xl={12}
                lg={12}
                md={12}
              >
                <Form.Item name="firstName" label="ชื่อ">
                  <Input className="input-full" placeholder="ชื่อ" />
                </Form.Item>
              </Col>
              <Col
                style={{ fontSize: 20, fontWeight: "bold", color: "#053938" }}
                xl={12}
                lg={12}
                md={12}
              >
                <Form.Item name="lastName" label="นามสกุล">
                  <Input className="input-full" placeholder="นามสกุล" />
                </Form.Item>
              </Col>
              <Col
                style={{ fontSize: 20, fontWeight: "bold", color: "#053938" }}
                xl={12}
                lg={12}
                md={12}
              >
                <Form.Item name="password" label="รหัสผ่าน">
                  <Input.Password
                    className="input-full"
                    placeholder="รหัสผ่าน"
                  />
                </Form.Item>
              </Col>
              <Col
                style={{ fontSize: 20, fontWeight: "bold", color: "#053938" }}
                xl={12}
                lg={12}
                md={12}
              >
                <Form.Item name="phoneNumber" label="เบอร์โทรศัพท์">
                  <Input className="input-full" placeholder="เบอร์โทรศัพท์" />
                </Form.Item>
              </Col>
              <Col
                style={{ fontSize: 20, fontWeight: "bold", color: "#053938" }}
                xl={12}
                lg={12}
                md={12}
              >
                <Form.Item name="email" label="อีเมล">
                  <Input className="input-full" placeholder="อีเมล" />
                </Form.Item>
              </Col>
              {/* <Col
              style={{ fontSize: 20, fontWeight: "bold", color: "#053938" }}
              xl={12}
              lg={12}
              md={12}
            >
              <Form.Item name="gender" label="เพศ">
                <Select
                  placeholder="เลือกเพศ"
                  className="input-full"
                  options={[
                    { value: "ชาย", label: "ชาย" },
                    { value: "หญิง", label: "หญิง" },
                  ]}
                />
              </Form.Item>
            </Col> */}
            </Row>
          </div>
          <Row className="mt-6">
            <Button
              htmlType="submit"
              size="large"
              style={{
                width: "100%",
                backgroundColor: "#000d6b",
                border: "none",
                color: "white",
              }}
            >
              สมัครสมาชิก
            </Button>
          </Row>
        </Card>
      </Form>
    </div>
  );
};

export default Register;
