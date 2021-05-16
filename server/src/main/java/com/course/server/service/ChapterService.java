package com.course.server.service;

import com.course.server.domain.Chapter;
import com.course.server.domain.ChapterExample;
import com.course.server.dto.ChapterDto;
import com.course.server.mapper.ChapterMapper;
import com.fasterxml.jackson.databind.util.BeanUtil;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

import static sun.plugin2.os.windows.OSVERSIONINFOA.size;

@Service
public class ChapterService {
    @Resource
    private ChapterMapper chapterMapper;
    public List<ChapterDto> list(){
        PageHelper.startPage(2,1);
        ChapterExample chapterExample = new ChapterExample();
        List<Chapter> chapterList = chapterMapper.selectByExample(chapterExample);
        List<ChapterDto> chapterDtoList=new ArrayList<ChapterDto>();
   for (int i = 0, l = chapterList.size(); i < l; i++){
       Chapter chapter=chapterList.get(i);
       ChapterDto chapterDto = new ChapterDto();
       BeanUtils.copyProperties(chapter,chapterDto);
       chapterDtoList.add(chapterDto);
  }
   return chapterDtoList;
    }
}
