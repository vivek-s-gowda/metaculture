import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss'],
})
export class CourcesComponent implements OnInit {
  constructor() {}

  courses = [
    {
      image: 'assets/images/course1.png',
      heading: 'Conflict, Culture and Democracy',
      description:
        'Our flagship course helps demystify the world that we live in. How do we make sense of our constantly changing world? What are the key moving parts of this complex world and how do they relate to each other? What is at stake? How do we engage with urgent and vital issues around us and still maintain our sanity? How do we connect to other humans whose experiences are different? How do we strengthen the weakening liberal democratic world order?',
    },
    {
      image: 'assets/images/course2.png',
      heading: 'Collaborative Relationships',
      description:
        'This course will help you look at, both personal and civic relationships in a new way. What is really going on in a relationship, be it at home or at work? What do you need to develop to become part of a constructive relationship? What do relationships in the family, community or even in a democracy have in common? What do our relationships say about us? How do they go wrong and what can you do to radically improve them? How can we build and sustain caring relationships in an increasingly fragmented and mobile world? ',
    },
    {
      image: 'assets/images/course3.png',
      heading: 'Diversity and Pluralism',
      description:
        'This course comes out of MetaCulture’s insights developed from our work on diversity from 1996 onwards, and with inter-faith community leaders from 2007. What do Liberalism, Pluralism and Secularism really mean? Do all religious groups respond similarly to these ideas? Are some value systems at odds with liberal democracies and pluralism itself? How can minorities (whether religious, ethnic, racial, or sexual) survive and coexist alongside a dominant group? How does the weakening of liberal democracies globally and in the USA affect the idea of pluralistic coexistence?',
    },
    {
      image: 'assets/images/course4.png',
      heading: 'Critical Thinking',
      description:
        'This course demystifies the development of one’s thinking process. What prevents us from being open and curious learners? How can we think objectively and make useful decisions and choices? What are the obstacles to being a critical thinker? How can we cultivate our intellectual, imaginative, and relational capabilities to become more effective as citizens of a democracy? How do we equip ourselves to understand the world when politics, technology and media are constantly manipulating our emotions and pushing fake news? ',
    },
    {
      image: 'assets/images/course5.png',
      heading: '12 Laws of Democracy and Pluralism',
      description:
        'This course is a much-needed reality check that systematically dismantles the key misconceptions and fallacies most of us hold about free and open societies. When people think about democracy they usually think of political parties, elections, big money, and minority rights. Similarly, when they think about diversity, they think about equality, equity, inclusion, and the like. The 12 Laws of Democracy and Pluralism helps you dig deeper and correct erroneous beliefs and the resulting behaviors that continue to weaken our communities and societies. Most of all this course helps us establish realistic expectations for what our democracies can give us. ',
    },
  ];
  ngOnInit(): void {}
}
