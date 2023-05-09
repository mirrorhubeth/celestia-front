import { createStyles } from "antd-style";
import classNames from "classnames";
import { Col, Row } from "antd";

const useStyles = createStyles({
  status: {
    width: 90,
    height: 47,
    textAlign: "center",
    fontSize: 32,
    lineHeight: "1",
    borderRadius: "23px",
    color: "#fff",
    padding: "6px 10px 6px 10px",
    "&.normal": {
      background: "#65cc7f",
    },
    "&.error": {
      background: "#ff0000",
    },
    "&.warning": {
      background: "#ffad33",
    },
  },
  children: {
    fontSize: 32,
    lineHeight: "1",
    fontWeight: "bold",
    overflowWrap: "anywhere",
  },
});

export default function TagContent(props) {
  const { tag, status, children } = props;
  const { styles } = useStyles();
  return (
    <Row gutter={[0, 21]} align="middle">
      <Col>
        <div className={classNames(styles.status, status, styles.main)}>
          {tag}
        </div>
      </Col>
      <Col span={24} className={styles.children}>
        {children}
      </Col>
    </Row>
  );
}
