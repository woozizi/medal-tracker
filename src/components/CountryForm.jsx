import React, { useState } from 'react'

const CountryForm = ({ listedCountry, setListedCountry, tableHeader }) => {
  const [country, setCountry] = useState("");
  const [goldmedal, setGoldmedal] = useState("");
  const [silvermedal, setSilvermedal] = useState("");
  const [bronzemedal, setBronzemedal] = useState("");


  const handleAddList = (e) => {
    e.preventDefault();

    //빈칸 체크
    if (!country.trim() ||
      goldmedal === "" ||
      silvermedal === "" ||
      bronzemedal === "") {
      alert("모든 입력칸에 값을 적어주세요.");
      return;
    }

    //중복 체크
    if (listedCountry.some((item) => item.country === country)) {
      alert("이미 추가된 국가입니다. 변경된 내용이 있다면 업데이트를 누르세요.");
      return;
    }

    const newCountryList = {
      id: Date.now(),
      country: country,
      goldmedal: Number(goldmedal),
      silvermedal: Number(silvermedal),
      bronzemedal: Number(bronzemedal),
    };

    //추가
    setListedCountry([...listedCountry, newCountryList]);

    //초기화
    setCountry("");
    setGoldmedal(0);
    setSilvermedal(0);
    setBronzemedal(0);

  };

  //메달 업데이트하기
  const handleUpdateMedal = () => {

    if (!listedCountry.some((item) => item.country === country)) {
      alert("존재하지 않는 국가입니다. 업데이트할 수 없습니다.");
      return;
    }

    setListedCountry(
      listedCountry.map((item) =>
        item.country === country
          ? {
            ...item,
            goldmedal: Number(goldmedal),
            silvermedal: Number(silvermedal),
            bronzemedal: Number(bronzemedal),
          }
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
    <form onSubmit={handleAddList}>
      <h1 >2024 파리 올림픽</h1>
      <table>
        <thead>
          <tr>
            {tableHeader.map((th) => (
              <th key={th}>{th}</th>
            ))}
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
                  setGoldmedal(Number(e.target.value));
                }} />
            </td>
            <td>
              <input
                type='number'
                placeholder='0'
                min="0"
                value={silvermedal}
                onChange={(e) => {
                  setSilvermedal(Number(e.target.value));
                }} />
            </td>
            <td>
              <input
                type='number'
                placeholder='0'
                min="0"
                value={bronzemedal}
                onChange={(e) => {
                  setBronzemedal(Number(e.target.value));
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
  )
}

export default CountryForm;