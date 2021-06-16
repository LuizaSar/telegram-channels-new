import React from 'react'
import styles from './AdminChannels.module.css'
import { Link } from 'react-router-dom'

function AdminChannels (props) {
  return (
    <div className={styles.channel_block}>
      {props.channels.map((channel) => {
        return (
          <Link to={`/${channel.id}`}>
          <div className={styles.channel}>
            <div className={styles.channel_name}>{channel.name}</div>
            <div className={styles.channel_details}>
              <div className={styles.channel_img}>
                <img
                  src={channel.imgUrl}
                  alt=""
                />
              </div>
              <div className={styles.channel_description}>
                <div className={styles.channel_title}>{channel.desk}</div>
                <span className={styles.channel_link}>{channel.channelLogin}</span>
                <span className={styles.channel_subscribers}>{channel.followers}</span>
              </div>
            </div>
          </div>
          </Link>
        )
      })}
    </div>
  );
}

export default AdminChannels