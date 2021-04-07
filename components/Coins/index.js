import styles from "./Coins.module.css";

function Coins({
  name,
  id,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img className={styles.coin_img} src={image} alt={id} />
          <h1 className={styles.coin_h1}>{name}</h1>
          <p className={styles.coin_symbol}>{symbol}</p>
        </div>
        <div className={styles.coin_data}>
          <p className={styles.coin_price}>${price.toFixed(2)}</p>
          <p className={styles.coin_volume}>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className={(styles.coin_percent, styles.red)}>
              {" "}
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className={(styles.coin_percent, styles.green)}>
              {priceChange.toFixed(2)}%
            </p>
          )}

          <p className={styles.coin_marketcap}>
            Mrk Cap: ${marketcap.toLocaleString(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coins;
