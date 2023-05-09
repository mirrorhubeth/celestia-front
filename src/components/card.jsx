import { Row, Col } from "antd";
import { createStyles } from "antd-style";

const useStyles = createStyles({
  label: {
    fontSize: 32,
    color: "#000000",
  },
  content: {
    color: "#333333",
    fontSize: 32,
    fontWeight: "bold",
  },
  img: {
    // position: "relative",
    // left: -35,
    // top: -30
  }
});

export default function Card(props) {
  const { bg, label, content, img } = props;
  const { styles } = useStyles();
  return (
    <Row wrap={false}
      align="middle"
      gutter={12}
      style={{ background: `url(${bg}) no-repeat` }}
    >
      <Col>
        <img src={img} alt="img" className={styles.img} />
      </Col>
      <Col>
        <Row gutter={[0, 20]}>
          <Col span={24} className={styles.label}>
            {label}
          </Col>
          <Col span={20} className={styles.content}>
            {content}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
