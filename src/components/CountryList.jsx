import React, { useState } from 'react'


const CountryList = ({ listedCountry, setListedCountry, tableHeader }) => {

  const [sortOrderBy, setSortOrderBy] = useState("gold");


  //정렬방식
  const sortOption = (countries) => {
    return [...countries].sort((a, b) => {
      if (sortOrderBy === "gold") {
        return b.goldmedal - a.goldmedal;
      } else if (sortOrderBy === "total") {
        const totalA = a.goldmedal + a.silvermedal + a.bronzemedal;
        const totalB = b.goldmedal + b.silvermedal + b.bronzemedal;
        return totalB - totalA;
      }
    });
  };

  //리스트 삭제하기
  const handleDeleteList = (data) => {
    setListedCountry(listedCountry.filter((item) => item.id !== data.id));
  };



  return (
    <>
      <div className="sort-options">
        <label>정렬 기준: </label>
        <select
          value={sortOrderBy}
          onChange={(e) => setSortOrderBy(e.target.value)}
        >``
          <option value="gold">금메달 많은 순</option>
          <option value="total">전체 메달 많은 순</option>
        </select>
      </div>

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
            {sortOption(listedCountry).map(({ id, country, goldmedal, silvermedal, bronzemedal }) => (
              <li className='list-item' key={id}>
                <span>{country}</span>
                <span>{goldmedal}</span>
                <span>{silvermedal}</span>
                <span>{bronzemedal}</span>
                <span>
                  <button onClick={() => handleDeleteList(data)}>삭제</button>
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  )
}

export default CountryList