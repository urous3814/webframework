import React from "react";
import Notification1 from "./Notification1";

const reservedNotifications = [
    {
        id: 0,
        message: "제출자: 김지훈",
    },
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];


// const reservedNotifications = [
//     {
//         id: 1,
//         message: "안녕하세요, 오늘 일정을 알려드립니다.",
//     },
// ];

/*
const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
];
*/
var timer;

class NotificationList3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
        console.log(`NotiList constructor() called.`);
    }

    componentDidMount() {
        console.log(`NotiList componentDidMount() called.`);
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                console.log(`NotiList index ${index} setState() call`);
                this.setState({
                    notifications: notifications,
                });
            } else {
                console.log(`NotiList NULL setState() call`);
                
                clearInterval(timer);
            }
        }, 1000);
    }
    
    componentDidUpdate() {
        console.log(`NotiList componentDidUpdate() called.`);
    }

    componentWillUnmount() {
        console.log(`NotiList componentWillUnmount called.`);
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        console.log(`NotiList render() called.`);
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification1
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList3;
