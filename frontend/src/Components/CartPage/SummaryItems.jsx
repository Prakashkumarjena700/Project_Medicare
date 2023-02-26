import styles from "./Summarypage.module.css";
export const SummaryItem = ({ item }) => {
  console.log(item.name);
  return (
    <div className={styles.Itemconatiner}>
      <img src={item.img1} alt="icon" width={"100px"} />
      <div className={styles.leftitemcontainer}>
        <h6>{item.name}</h6>
        <p>{item.highlights}</p>
      </div>
      <div className={styles.rightitemcontainer}>
        <h6>₹ {item.price}</h6>
        {/* <p>MRP ₹{strikedPrice}</p> */}
      </div>
    </div>
  );
};
