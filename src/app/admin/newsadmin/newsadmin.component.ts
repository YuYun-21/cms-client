import { Component, OnInit } from '@angular/core';
import {News} from "../../model/News";
import {NewsService} from "../../service/news.service";

@Component({
  selector: 'app-newsadmin',
  templateUrl: './newsadmin.component.html',
  styleUrls: ['./newsadmin.component.css']
})
export class NewsadminComponent implements OnInit {
  nl:Array<News>;
  constructor(private newsService:NewsService
    //,public dialogService: DialogService
  ) {
    this.nl=new Array();
  }

  ngOnInit() {
    this.loadNewsList();
  }

  loadNewsList(){

    this.newsService.getNewsList()
      .then((data:any)=>{
        this.nl=data;


      })


  }

  // addNews(){
  //   const ref = this.dialogService.open(NewseditComponent, {
  //
  //     header: '添加新闻',
  //
  //   });
  //
  //   //当弹出窗口关闭时触发的事件
  //   ref.onClose.subscribe((news:News) => {
  //
  //     if(news){
  //       console.log("弹出层关闭时回传的值"+news.title);
  //       this.newsService.saveNews(news)
  //         .then((data:any)=>{
  //           if(data.msg=='ok'){
  //             this.loadNewsList();
  //           }
  //           else {
  //             //弹出错误信息
  //           }
  //         })
  //     }
  //   });
  //
  // }
  //
  // updateNews(id:string){
  //
  //   let news:News;
  //   news=new News();
  //   this.newsService.getSingleNewsById(id)
  //     .then((data:any)=>{
  //       if(data){
  //         news=data;
  //         const ref = this.dialogService.open(NewseditComponent, {
  //           data: {
  //             "news":news
  //           },
  //           header: '修改新闻',
  //
  //         });
  //
  //         //当弹出窗口关闭时触发的事件
  //         ref.onClose.subscribe((news:News) => {
  //
  //           if(news){
  //             console.log("弹出层关闭时回传的值"+news.title);
  //             this.newsService.saveNews(news)
  //               .then((data:any)=>{
  //                 if(data.msg=='ok'){
  //                   this.loadNewsList();
  //                 }
  //                 else {
  //                   //弹出错误信息
  //                 }
  //               })
  //           }
  //         });
  //       }
  //     })
  // }
  //
  // deleteNews(id:string){
  //   this.newsService.deleteNews(id)
  //     .then((data:any)=>{
  //       if(data.msg=='ok'){
  //         this.loadNewsList();
  //       }
  //       else{
  //         //弹出报错信息
  //       }
  //     })
  // }
}
