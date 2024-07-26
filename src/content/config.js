import { defineCollection, z } from "astro:content";

// 定义文章集合的模式
const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),            // 标题字段
    description: z.string(),      // 描述字段
    dateFormatted: z.string(),    // 格式化日期字段
    date: z.string().refine((date) => {
      // 检查日期格式是否为 YYYY-MM-DD
      return /^\d{4}-\d{2}-\d{2}$/.test(date);
    }, {
      message: "日期格式应为 YYYY-MM-DD"
    })
  }),
});

// 导出集合
export const collections = {
  post: postCollection,
};
