import ProfileCard from './component/profile-cards

';
import './App.css';

const members = [
  { id: 1, name: 'แจ๊ค ผู้ฆ่ายัก', nickname: 'แจ๊ค',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
    { id: 2, name: 'บิว มิสเตอร์โรบอค', nickname: 'บิว',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
    { id: 3, name: 'โฟ รักfgo', nickname: 'โฟ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['Fgo', 'แมว'] }
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;