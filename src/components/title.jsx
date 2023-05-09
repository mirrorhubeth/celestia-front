import React from "react";
import { Row, Col } from "antd";
import { createStyles } from "antd-style";

const useStyle = createStyles({
  col: {
    width: 4,
    height: 18,
    background: "#007CF9",
    boxShadow: "0px 3px 8px 0px rgba(78,129,229,0.4)",
    borderRadius: "2px",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Arial"
  }
});

export default function Title(props) {
  const { styles } = useStyle();
  const { children} = props;
  return (
    <Row align="middle" gutter={8}>
      <Col>
        <div className={styles.col}></div>
      </Col>
      <Col className={styles.title}>{children}</Col>
    </Row>
  );
}
