import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  // template: '<h2>{{cos}}<h2>',
  styleUrls: ['./todolist.component.css']
  // styles: ['h2 {color: blue;}']
})
export class TodolistComponent {   
  //implements OnInit {
  // constructor() { }
  // ngOnInit() {
  // }
  todoCourses: Array<Course> = [
{ title : 'Kurs Microsoft SQL Server - od podstaw - strefaKursow',complete: false },
{ title : 'Angular 2 - udemy',complete: false },
{ title : 'Phyton dla początkujących - udemy',complete: false },
{ title : 'Kurs Selenium Java od podstaw - udemy',complete: false },
{ title : 'Intensywny Hacking w praktyce cz.1 - udemy',complete: false },
{ title : 'Intensywny Hacking w praktyce cz.1 - udemy',complete: false },
{ title : 'Wzorce projektowe (Desing Patterns) - udemy',complete: false },
{ title : 'Spring Boot - praktyczny kurs pisania aplikacji backend - udemy',complete: false },
{ title : 'JavaDeveloper - strefaKursow',complete: true },
{ title : 'Kurs MongoDB nowoczesne Bazy Danych - strefaKursow',complete: true },
{ title : 'Kurs Bazy Danych MySQL od Podstaw - strefaKursow',complete: true },
{ title : 'Kurs SQL nowoczesne Bazy Danych - strefaKursow',complete: true },
{ title : 'Java-ambitnyStart - aplikacjaWebowa - udemy',complete: true },
{ title : 'Java Poziom 2 - strefaKursow',complete: true },
{ title : 'Kurs JAVA Hibernate Aplikacje Bazodanowe - strefaKursow', complete: true },
{ title : 'Wprowadzenie Do Git I GitHub - udamy',complete: true },
{ title : 'Wireframing With Balsamiq - udemy',complete: true },
{ title : 'Najpopularniejsze Biblioteki JAVA - strefaKursow',complete: true },
{ title : 'Spring Framework Od Podstaw - strefaKursow',complete: true },
{ title : 'Kurs JAVA Testy Jednostkowe - strefaKursow',complete: true },
{ title : 'Beginner Java JavaFX Maven Jenkins - udemy',complete: true },
{ title : 'Java Od Podstaw Do Eksperta - udemy',complete: true },
{ title : 'Jav aWzorce Projektowe - strefaKursow',complete: true },
{ title : 'Java Średniozaawansowana - strefaKursow', complete: true },
{ title : 'Dobre Praktyki Pracy W Zespole - strefaKursow',complete: true },
{ title : 'Kurs Java Narzędzia Developera - strefaKursow', complete: true },
{ title : 'JDBC and MySQL - udemy',complete: true },
{ title : 'JDBC in Simple Way - udemy',complete: true },
{ title : 'Fundamenty Jezyka Java - strefaKursow', complete: true },
{ title : 'Certyfikat - codeORG',complete: true },
{ title : 'E-Comerce W Praktyce - uouw',complete: true },
{ title : 'Certyfikat GIT - eduwebpl', complete: true },
{ title : 'Kurs Programowania W Java - strefaKursow', complete: true },
{ title : 'Angielski Od Zera Do Bohat IA2 - uouw',complete: true },
{ title : 'Angielski Po Latach A1 - uouw',complete: true },
{ title : 'Angielski Od Zera Do Bohat III A1A2 - uouw',complete: true },
{ title : 'Jak Cię Widzą Autoprezentacja - uouw',complete: true },
{ title : 'Angielski Od Zera Do Bohat II A1 - uouw',complete: true },
{ title : 'Scena Dla Każdego - uouw',complete: true }]

  titleTodo = 'Twoja lista kursów:';
  cos = 'Koniec listy - podsumowanie';
  newTodoCourse: string = "Podaj tytuł kursu ...";
  // todoCourses: Array<Course> = [
  //   { title : 'Pierwszy kurs Java',
  //     complete: true },
  //   {
  //     title :'Drugi kurs Angular',
  //     complete: false
  //   }
  // ]

  addTodoCourse(){
    if(!this.newTodoCourse){
      return;
    }
    const newCourse: Course = {
        title: this.newTodoCourse,
        complete: false
    };
    this.todoCourses.unshift(newCourse);
    // console.log(this.newTodoCourse);
    this.newTodoCourse=""
  };

  onClickMe(){
    if(this.newTodoCourse=="Podaj tytuł kursu ..."){
      this.newTodoCourse="";
    }
    // console.log("ktoś mnie klikną : " + this.newTodoCourse);
  };

  deleteCourse(index){
    this.todoCourses.splice(index, 1);
  }
}

interface Course {
    title : string;
    complete: boolean;
}
