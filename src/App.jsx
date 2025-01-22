import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [country, setCountry] = useState("");
  const [goldmedal, setGoldmedal] = useState(0);
  const [silvermedal, setSilvermedal] = useState(0);
  const [bronzemedal, setBronzemedal] = useState(0);
  const [listedCountry, setListedCountry] = useState([]);
  const [updateMedal, setUpdateMedal] = useState("");

  const tableHeader = ["국가명", "금메달", "은메달", "동메달"];


  //리스트에 국가 추가
  const handleAddList = (e) => {
    e.preventDefault();


    if (!country.trim()) {
      alert("국가명을 입력하세요.");
      return;
    }
    //중복 체크
    const isExist = listedCountry.some((item) => item.country === country);
    if (isExist) {
      alert("이미 추가된 국가입니다. 추가된 메달이 있다면 업데이트를 누르세요.");
      return ;
    }

    const newCountryList = {
      country: country,
      goldmedal: goldmedal,
      silvermedal: silvermedal,
      bronzemedal: bronzemedal,
    };

    //추가
    setListedCountry([...listedCountry, newCountryList]);

    //초기화
    setCountry("");
    setGoldmedal(0);
    setSilvermedal(0);
    setBronzemedal(0);

  };

  //리스트 삭제하기
  const handleDeleteList = (data) => {
    setListedCountry(listedCountry.filter((item) => item.country !== data.country));
  };

  //메달 업데이트하기
const handleUpdateMedal = () => {
  const isExist = listedCountry.some((item) => item.country === country);

  if (!isExist) {
    alert("존재하지 않는 국가입니다. 업데이트할 수 없습니다.");
    return;
  }

  setListedCountry(
    listedCountry.map((item) =>
      item.country === country
        ? { ...item, goldmedal: goldmedal, silvermedal: silvermedal, bronzemedal: bronzemedal }
        : item
    )
  );

  // 초기화
  setCountry("");
  setGoldmedal(0);
  setSilvermedal(0);
  setBronzemedal(0);

  alert("업데이트가 완료되었습니다!");
};


  return (
    <div className="container">
      <form onSubmit={handleAddList}>
        <h1 >2024 파리 올림픽</h1>
        <table>
          <thead>
            <tr>
              {tableHeader.map((th) => {
                return <th key={th}>{th}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type='text'
                  placeholder='국가 입력'
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }} />
              </td>
              <td>
                <input
                  type='number'
                  min="0"
                  placeholder='0'
                  value={goldmedal}
                  onChange={(e) => {
                    setGoldmedal(e.target.value);
                  }} />
              </td>
              <td>
                <input
                  type='number'
                  placeholder='0'
                  min="0"
                  value={silvermedal}
                  onChange={(e) => {
                    setSilvermedal(e.target.value);
                  }} />
              </td>
              <td>
                <input
                  type='number'
                  placeholder='0'
                  min="0"
                  value={bronzemedal}
                  onChange={(e) => {
                    setBronzemedal(e.target.value);
                  }} />
              </td>
              <td>
                <div className='button-group'>
                  <button type='submit'>국가 추가</button>
                  <button type='button' onClick={handleUpdateMedal}>업데이트</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <ul>
        {listedCountry.length === 0 ? (
          <li className='empty-message'>아직 추가된 국가가 없습니다. 메달을 추적하세요!</li>
          ) : (
            <>
              <li className='list-header'>
                {tableHeader.map((th) => (
                  <span key={th}>{th}</span>
                ))}
                <span>액션</span>
              </li>
              {listedCountry.map((data) => (
                <li className='list-item' key={data.country}>
                  <span>{data.country}</span>
                  <span>{data.goldmedal}</span>
                  <span>{data.silvermedal}</span>
                  <span>{data.bronzemedal}</span>
                  <button onClick={() => handleDeleteList(data)}>삭제</button>
                </li>
              ))}
            </>
          )}
      </ul>
    </div>
  )
}

export default App;