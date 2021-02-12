<template>
  <div class="vehicle__card">
    <div
      class="vehicle__image"
      :style="{
        backgroundImage: `url('https://www.wandaloo.com/files/2019/07/FORD-Focus-ST-2020-Neuve-Maroc-13.jpg')`,
      }"
    ></div>
    <div class="vehicle__info">
      <div class="content">
        <div class="price">$66777</div>
        <div class="title">Ford Focus</div>
        <div class="year">2018</div>
      </div>
      <div class="footer">
        <div class="date">12:49</div>
        <div class="location">Casablanca</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.vehicle__card {
  display: flex;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba($darkGrey, 0.1);
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  .vehicle__image {
    width: 220px;
    background-color: #ddd;
    background-size: cover;
    background-position: center;
  }
  .vehicle__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }
  .content {
    padding: 32px;
  }
  .footer {
    display: flex;
    align-items: center;
    padding: 10px 28px;
    border-top: 1px solid #ebebeb;
  }
  .price {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 0.5px;
    color: $green;
    margin-bottom: 12px;
  }
  .title {
    margin-bottom: 10px;
  }
  .date {
    margin-right: 20px;
  }
}
</style>