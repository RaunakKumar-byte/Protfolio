import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-dsa-tracker',
  templateUrl: './dsa-tracker.component.html',
  styleUrls: ['./dsa-tracker.component.scss']
})
export class DsaTrackerComponent implements OnInit {
  
  leetcodeStats = {
    username: 'Raunak_kumar524',
    profileUrl: 'https://leetcode.com/u/Raunak_kumar524/',
    totalSolved: 47,
    totalProblems: 3695,
    attempting: 4,
    easy: { solved: 39, total: 902 },
    medium: { solved: 7, total: 1922 },
    hard: { solved: 1, total: 871 },
    rank: 2250611,
    badges: 0,
    submissions: 85,
    activeDays: 17,
    maxStreak: 6,
    currentStreak: 2
  };

  githubStats = {
    username: 'RaunakKumar-byte',
    profileUrl: 'https://github.com/RaunakKumar-byte',
    totalRepos: 15,
    totalStars: 8,
    totalCommits: 120,
    totalLanguages: 6,
    mostUsedLanguage: 'JavaScript',
    languages: [
      { name: 'JavaScript', percentage: 35, color: '#f7df1e' },
      { name: 'Python', percentage: 25, color: '#3776ab' },
      { name: 'TypeScript', percentage: 20, color: '#3178c6' },
      { name: 'HTML', percentage: 10, color: '#e34f26' },
      { name: 'CSS', percentage: 7, color: '#1572b6' },
      { name: 'Java', percentage: 3, color: '#f89820' }
    ]
  };

  recentProblems = [
    {
      title: 'Binary Tree Inorder Traversal',
      difficulty: 'Easy',
      acceptance: '78.2%',
      timeAgo: 'a day ago',
      status: 'Accepted',
      language: 'Java'
    },
    {
      title: 'Binary Tree Postorder Traversal',
      difficulty: 'Easy',
      acceptance: '75.1%',
      timeAgo: 'a day ago',
      status: 'Accepted',
      language: 'Java'
    },
    {
      title: 'Binary Tree Preorder Traversal',
      difficulty: 'Easy',
      acceptance: '76.8%',
      timeAgo: 'a day ago',
      status: 'Accepted',
      language: 'Java'
    },
    {
      title: 'Remove All Adjacent Duplicates In String',
      difficulty: 'Easy',
      acceptance: '68.4%',
      timeAgo: '19 days ago',
      status: 'Accepted',
      language: 'Java'
    },
    {
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      acceptance: '82.1%',
      timeAgo: '20 days ago',
      status: 'Accepted',
      language: 'Java'
    },
    {
      title: 'Merge Two Sorted Lists',
      difficulty: 'Easy',
      acceptance: '73.2%',
      timeAgo: 'a month ago',
      status: 'Accepted',
      language: 'Java'
    }
  ];

  achievements = [
    {
      title: 'First Problem Solved',
      description: 'Completed your first LeetCode problem',
      icon: 'fas fa-trophy',
      date: '2024-01-15',
      color: '#ffd700'
    },
    {
      title: 'Easy Master',
      description: 'Solved 25+ Easy problems',
      icon: 'fas fa-medal',
      date: '2024-03-20',
      color: '#28a745'
    },
    {
      title: 'Medium Challenger',
      description: 'Solved your first Medium problem',
      icon: 'fas fa-star',
      date: '2024-05-10',
      color: '#ffc107'
    },
    {
      title: 'Consistent Coder',
      description: 'Maintained 6-day streak',
      icon: 'fas fa-fire',
      date: '2024-08-15',
      color: '#dc3545'
    }
  ];

  goals = [
    {
      title: 'Solve 100 Problems',
      current: 47,
      target: 100,
      progress: 47,
      color: '#007bff'
    },
    {
      title: 'Master Medium Problems',
      current: 7,
      target: 50,
      progress: 14,
      color: '#ffc107'
    },
    {
      title: 'Complete Hard Problems',
      current: 1,
      target: 10,
      progress: 10,
      color: '#dc3545'
    },
    {
      title: 'Maintain 30-day Streak',
      current: 2,
      target: 30,
      progress: 6.7,
      color: '#28a745'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  getDifficultyClass(difficulty: string): string {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'badge-success';
      case 'medium': return 'badge-warning';
      case 'hard': return 'badge-danger';
      default: return 'badge-secondary';
    }
  }

  getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'accepted': return 'status-accepted';
      case 'wrong answer': return 'status-wrong';
      case 'time limit exceeded': return 'status-tle';
      default: return 'status-other';
    }
  }

  calculateProgress(current: number, target: number): number {
    return Math.min((current / target) * 100, 100);
  }
}