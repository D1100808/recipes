import React from 'react'
import { useParams } from 'react-router-dom';
import CreatorItem from '../components/CreatorItem';
import CreatorsList from '../components/CreatorsList';
import MainList from './MainPage/MainList';



const DATA_RECIPES = [
  {
    id: "p1",
    title: "Жаркое по-деревенски",
    description:
      "Простое, но очень ароматное и вкусное блюдо для семейного обеда или ужина.",
    recipe: [
      "Свиная корейка без кости - 1 кг",
      "Сало свиное свежее - 50 г",
      "Масло сливочное - 50 г",
      "Картофель - 1 кг",
      "Перец болгарский - 1 шт.",
      "Морковь - 2 шт.",
      "Лук репчатый - 2 шт.",
      "Чеснок - 2 зубчика",
      "Зелень петрушки свежая - по вкусу",
      "Зелень петрушки сушёная - по вкусу",
      "Специи для мяса - по вкусу",
      "Перец чёрный молотый - по вкусу",
      "Соль - по вкусу",
    ],
    imageURL: "https://www.patee.ru/r/x6/19/ec/c9/640m.jpg",
    creator:'u1'
  },
  {
    id: "p2",
    title: "ПИЦЦА С КОЛБАСОЙ И СЫРОМ",
    description:
      "Легко и просто, бесподобно вкусно, пальчики оближешь! Пицца с колбасой и сыром в духовке готовится очень быстро. Всего за 15 минут будет готово тесто и начинка, а потом останется выждать время запекания. Пицца может быть разной - меняйте ингредиенты в зависимости от того, что есть у вас в холодильнике.",
    recipe: [
      "Вода - 1 кг",
      "Соль - 0.25 чайн.л",
      "Сухие дрожжи - 0.3 чай.л",
      "Оливковое масло - 1 стол.л",
      "Томатная паста - 70 гр",
      "Мука - 100 гр",
      "Колбаса полукопченая - 100 гр",
    ],
    imageURL:
      "https://static.1000.menu/img/content-v2/08/f3/21103/picca-v-duxovke-s-kolbasoi-i-syrom_1616655833_29_max.jpg",
    creator:'u2'
  },
];


function UserRecipes() {
  const userId = useParams().userId
  const loadedUser = DATA_RECIPES.filter(recipe => recipe.creator === userId)
  return (
    <div>
      <MainList items={loadedUser}/>
    </div>
  )
}

export default UserRecipes