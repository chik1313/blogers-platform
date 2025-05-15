import { ExtendedLikesDto } from '../../domain/dto/create-post.dto';
import { PostDocument } from '../../domain/post.enitity';

export class PostViewDto {
  id: string
  title: string
  shortDescription: string
  content: string
  blogId: string
  blogName: string
  createdAt: Date
  extendedLikesInfo:ExtendedLikesDto = {} as ExtendedLikesDto
  static mapToView(post: PostDocument ): PostViewDto {
    const dto = new PostViewDto();
    dto.id = post._id.toString();
    dto.title = post.title;
    dto.shortDescription = post.shortDescription;
    dto.content = post.content;
    dto.blogId = post.blogId;
    dto.blogName = post.blogName;
    dto.createdAt = post.createdAt;
    dto.extendedLikesInfo.likesCount = post.extendedLikesInfo.likesCount;
    dto.extendedLikesInfo.dislikesCount = post.extendedLikesInfo.dislikesCount;
    dto.extendedLikesInfo.myStatus = post.extendedLikesInfo.myStatus;
    dto.extendedLikesInfo.newestLikes = post.extendedLikesInfo.newestLikes
    return dto;
  }
}